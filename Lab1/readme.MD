# Command

`az group create --name testGroup --location "westeurope" && az deployment group create --resource-group testGroup --parameters webAppName="myDemoExpressApp-tr" repoUrl="https://github.com/Konstantin-tr/Node-Express-Demo" --template-uri "https://raw.githubusercontent.com/Konstantin-tr/Software-Deployment/main/Lab1/azuredeploy.json"`
