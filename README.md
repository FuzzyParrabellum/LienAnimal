# LienAnimal README

## Useful commands

### pip-tools as package manager

To add new libraries/packages to backend project, write them into backend/requirements/dev_requirements.in Then use this command to compile these requirements with pip-tools, and creating a new backend/requirements/dev_requirements.txt file that we can use to install our latest requirements. `pip-compile requirements/dev_requirements.in -o requirements/dev_requirements.txt`

Then to install the new packages : `pip install -r requirements/dev_requirements.txt`
