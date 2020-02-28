## For AWS Elasticbeanstalk Docker

`Dockerrun.aws.json`:
```json
{
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "metabase/metabase:v0.34.0",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "3000"
    }
  ],
  "Logging": "/var/log/metabase"
}
```
