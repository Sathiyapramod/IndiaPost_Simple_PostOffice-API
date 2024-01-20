pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Sathiyapramod/IndiaPost_Simple_PostOffice-API.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
    }
}
