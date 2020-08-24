const {
  GreeterClient,
  HelloRequest,
} = require('./proto/hello_grpc_web_pb')

const greeterService = new GreeterClient(
  'http://localhost:8080'
)

const request = new HelloRequest()
request.setName('world')

greeterService.sayHello(request, {}, (err, response) => {
  console.log(response.getMessage())
})
