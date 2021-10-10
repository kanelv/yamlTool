# Management and Orchestration for Kubernetes YAML

Assuming that the software runs on a machine installed a Linux distribution such as Ubuntu, CentOs.

1. Install Node.js that is JavaScript runtime environment
   $ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
   $ sudo bash nodesource_setup.sh
   $ sudo apt install nodejs

2. Install Yarn that is a JavaScript package manager helps to install JavaScript libraries
   $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   $ sudo apt update
   $ sudo apt install yarn

3. Copy the zip file of the software into the machine

4. After extracting the compressed file
   $ unzip yamlTool.zip

5. Go to the folder where the software is saved on terminal
   $ cd ~/yamlTool

6. The proposed tool needs to be provided kubeconfigs of the different clusters.
   The kubeconfig is used to the tool connect to the cluster for deploying an application.
   $ cp -R ~/. kube/config ./

7. Install all libraries for the software
   $ yarn install

8. Start the software
   $ yarn start

9. Request to the following URL on a browser

   $ http://localhost:3000

references:
using MongoDb v4.4
setting default user/passwork for MongoDb
https://stackoverflow.com/questions/38921414/mongodb-what-are-the-default-user-and-password
https://www.digitalocean.com/community/tutorials/how-to-configure-remote-access-for-mongodb-on-ubuntu-20-04
https://mongoosejs.com/docs/guide.html
https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server

solving problems
https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
