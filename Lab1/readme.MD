# Deployment

- Open the Azure CLI
- Create a new resource group
  - Example: `az group create --name testGroup --location "westeurope"`
- Create the deployment using the template files
  - Example: `az deployment group create --resource-group testGroup --template-uri "https://raw.githubusercontent.com/Konstantin-tr/Software-Deployment/main/Lab1/azuredeploy.json" --parameters "https://raw.githubusercontent.com/Konstantin-tr/Software-Deployment/main/Lab1/azuredeploy.parameters.json"`
  - The two files are taken directly from the corresponding github repository
