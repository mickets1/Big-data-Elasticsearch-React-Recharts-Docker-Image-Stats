import csv
import json
from elasticsearch import helpers, Elasticsearch

file_name = "docker.csv"
indexName = "docker"

def csv_reader(file_name):
    try:
        es = Elasticsearch(hosts="CONNECTIONsTRING",
        ssl_assert_fingerprint=(
            "FINGERPRINT"
        ))

        with open(file_name, 'r') as outfile:
            reader = csv.DictReader(outfile, delimiter='|')
            helpers.bulk(es, reader, index=indexName)
    except Exception as e:
        print(e)

csv_reader(file_name)