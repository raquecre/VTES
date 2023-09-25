node {
  def image_name = "vtesreactimage"

  stage('checkout') {
    checkout scm
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
   sh "docker build --progress=plain --no-cache -t ${image_name} ."
  }

  stage('deploy') {
    sh "docker-compose up -d vtesreact"
  }
}
