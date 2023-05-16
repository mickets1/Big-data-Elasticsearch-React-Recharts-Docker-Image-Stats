import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { Client } from '@elastic/elasticsearch'
import fs from 'fs-extra'

const app = express()

/**
 * Express middleware for communicating with elasticsearch
 * (avoiding displaying credentials in browser.)
 */
const client = new Client({
  node: 'https://localhost:9200',
  auth: { username: process.env.USERNAME, password: process.env.PASSWORD },
  tls: {
    ca: fs.readFileSync('./http_ca.crt'),
    rejectUnauthorized: false
  },
  log: 'info',
  apiVersion: '8.1.2'
})

app.use(cors())

/**
 * Elasticsearch query for top results based on popularity(integer).
 */
app.get('/mostpopular', async (req, res, next) => {
  try {
    // Default: 3 values.
    const response = await client.search(
      {
        size: 0,
        aggs: {
          mostpopular: {
            top_hits: {
              sort: [
                {
                  popularity: {
                    order: 'desc'
                  }
                }
              ]
            }
          }
        }
      }
    )

    res.json(response.aggregations.mostpopular.hits.hits)
  } catch (err) {
    next(err)
  }
})

/**
 * Elasticsearch query for counting the occurance of publiser name.
 */
app.get('/publisher', async (req, res, next) => {
  try {
    const response = await client.search(
      {
        size: 0,
        aggs: {
          publisher: {
            terms: {
              field: 'publisher.keyword'
            }
          }
        }
      }
    )

    res.json(response.aggregations.publisher.buckets)
  } catch (err) {
    next(err)
  }
})

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000')
  console.log('Press Ctrl-C to terminate...')
})
