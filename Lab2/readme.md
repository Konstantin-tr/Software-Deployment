# Lab 2

## Links

- WebApp Links
  - build:
    - https://node-express-calc-build.azurewebsites.net/
  - release:
    - https://node-express-calc-release.azurewebsites.net/

## Pipelines

### Build Pipeline

The full YAML file for the pipeline can be found in the nodejs repository or folder.

![Pipeline YAML](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_pipeline_yml.png)

#### Pipeline Runs

![Pipeline Runs](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_pipelineruns.png)

#### Pipeline Run Details

![One Pipeline Run](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_pipelinerun_detail.png)

![Pipeline Run Tests](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_pipelinerun_tests.png)

### Release Pipeline

The release pipeline takes the artifacts produced by the build pipeline and deploys them to Azure. After a release is created manually, the release pipeline automatically starts deploying the web app. Before deployment starts, an approval must be given from assigned maintainers (= Manual check).

![Release Overview](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_release_ov.png)

#### Release Setup

![Release Pipeline](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_release_pipeline.png)

#### Release Deploy Task

![Release Task](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_release_task.png)

#### Release Trigger

![Release Trigger](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_release_trigger.png)

![Release Approvement](https://github.com/Konstantin-tr/Software-Deployment/blob/main/Lab2/screenshots/screenshot_release_pending.png)
