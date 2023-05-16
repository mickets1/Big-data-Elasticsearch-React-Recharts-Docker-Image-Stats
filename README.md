Big Data application displaying docker container stats using React, Elasticsearch and Recharts(D3).

Dataset:
https://www.kaggle.com/datasets/joonasyoon/docker-hub-images

Dependencies:
https://gitlab.lnu.se/1dv027/student/ma225gn/assignment-wt2/elasticsearch-parser/-/tree/main/parser
Python parser for adding .csv dataset to elasticsearch.

mappings added manually:
{
  "mappings": {
    "properties": {
      "name":    { "type": "keyword" },
      "slug":  { "type": "keyword"  },
      "full_name":  { "type": "keyword"  },
      "type":  { "type": "keyword"  },
      "publisher":  { "type": "keyword"  },
      "source":  { "type": "keyword"  },
      "popularity":  { "type": "integer"  },
      "star_count":  { "type": "integer"  },
      "certification_status":  { "type": "keyword"  },
      "categories":  { "type": "keyword"  }
    }
  }
}
