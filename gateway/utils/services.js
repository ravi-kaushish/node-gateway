const fs = require('fs').promises

async function loadServices (filePath) {
  try {
    console.log('Loading services configuration...')
    const servicesData = await fs.readFile(filePath, 'utf8')
    console.log('Loaded services. Gateway is listening.')
    return JSON.parse(servicesData)
  } catch (err) {
    console.error('Error reading or parsing services config: ', err)
    throw err // Propagate the error
  }
}

function Services (configFilePath) {
  this.filePath = configFilePath
  this.services = {}

  // Initialize and read the JSON file
  loadServices(this.filePath)
    .then(services => {
      this.services = services

      // Refresh the data every hour (3600000 milliseconds)
      setInterval(async () => {
        try {
          const updatedServices = await loadServices(this.filePath)
          this.services = updatedServices
        } catch (err) {
          // Handle the error
        }
      }, 1 * 60 * 60 * 1000)
    })
    .catch(err => {
      // Handle the error during initialization
    })
}

Services.prototype.reloadServices = async function () {
  try {
    const updatedServices = await loadServices(this.filePath)
    this.services = updatedServices
  } catch (err) {
    // Handle the error
  }
}

Services.prototype.get = function () {
  // Return Cached services config
  return this.services
}

exports.getServiceConfig = async (req, res, next) => {
  let service_config = services[req.params.service]
  if (!service_config) {
    res.status(404).send({
      message: 'No such service exist...'
    })
  } else {
    next()
  }
}
