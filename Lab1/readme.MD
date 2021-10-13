# Command

`az group create --name testGroup --location "westeurope" && az deployment group create --resource-group testGroup --template-uri "https://raw.githubusercontent.com/Konstantin-tr/Software-Deployment/main/Lab1/azuredeploy.json" --parameters "https://raw.githubusercontent.com/Konstantin-tr/Software-Deployment/main/Lab1/azuredeploy.parameters.json"`
