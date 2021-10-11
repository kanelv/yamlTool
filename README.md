# Management and Orchestration for Kubernetes YAML

### Assuming that the software runs on a machine installed a Linux distribution such as Ubuntu.

1. Install Node.js v14.x that is JavaScript runtime environment

   ```shell
   curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs
   ```

2. Install Yarn v1.22.15 or greater that is a JavaScript package manager that helps to install JavaScript libraries

   ```sh
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt update
   sudo apt install yarn
   ```

3. Copy the zip file of the software into the machine

4. After extracting the compressed file

   ```sh
   unzip yamltool.zip
   ```

5. Go to the folder where the software is saved on terminal

   ```sh
   cd ~/yamltool
   ```

6. Install all libraries for the software

   ```sh
   yarn install
   ```

7. Start the software

   ```sh
   yarn start
   ```

8. Request to the following URL on a browser

   ```sh
   http://localhost:3000
   ```

9. Put some config to get realtime generate yaml result

10. Click the button to download an yaml file for the deployment
---
### I attached some results in the results folder.

### References:
https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/
