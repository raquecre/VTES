node {
  def image_name = "vtesreactimage"
  def image = null
  def dockerfile = null

  stage('checkout') {
    checkout scm
    dockerfile = 'Dockerfile'
  }

  stage('remove old image') {
    try {
      sh "docker stop ${image_name}"
      sh "docker rm ${image_name}"  
      sh "docker rmi ${image_name}"
    } catch (Exception e) {
      echo e.getMessage()
    }
  }

  stage('build image') {
    image = docker.build("${image_name}:1.0.0", "-f ${dockerfile} .")
  }

  stage('deploy') {
    image.withRun('-p 3001:3000' +
                  '-v .:/vtes-app'
                 '--name vtes-react')
    
  }
}
