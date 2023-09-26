node {
  def image_name = "vtes-react-image"
  def container_name = "vtes-react"

  stage('checkout') {
    checkout scm
  }

  stage('remove old image') {
    try {
      sh "docker stop \$(docker ps -a -q --filter name=${container_name})"
      sh "docker rm \$(docker ps -a -q --filter name=${container_name})"  
      sh "docker rmi ${image_name}"
    } catch (Exception e) {
      echo e.getMessage()
    }
  }

  stage('build image') {
   sh "docker build --progress=plain --no-cache -t ${image_name} ."
  }

  stage('deploy') {
    sh "docker-compose up -d vtesreact"
  }

  stage('clean images') {
    sh "docker image prune -fa"
  }
}
