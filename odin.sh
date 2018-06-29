
ANGULAR="~/Desktop/Projects/Odin-angular"
DJANGO="~/Desktop/Projects/Odin-django"

# You can also run commands and set title:
konsole&sleep 0.1
# Creaating four tabs
one=$(qdbus org.kde.konsole-$! /Windows/1 newSession default $ANGULAR)
two=$(qdbus org.kde.konsole-$! /Windows/1 newSession default $ANGULAR)
three=$(qdbus org.kde.konsole-$! /Windows/1 newSession default $DJANGO)
four=$(qdbus org.kde.konsole-$! /Windows/1 newSession default $DJANGO)

# Setting title 
qdbus org.kde.konsole-$! /Sessions/$one setTitle 1 Angular-Server
# Running a command
qdbus org.kde.konsole-$! /Sessions/$one runCommand 'npm start' 
# Set initial text in the tab instead of running a command
# qdbus org.kde.konsole-$! /Sessions/$one sendText pwd 


qdbus org.kde.konsole-$! /Sessions/$two setTitle 1 Angular


qdbus org.kde.konsole-$! /Sessions/$three setTitle 1 Django-Server
qdbus org.kde.konsole-$! /Sessions/$three runCommand 'python3 manage.py runserver'


qdbus org.kde.konsole-$! /Sessions/$four setTitle 1 Django


# After running this command error message is shown as below - 
# The D-Bus methods sendText/runCommand were just used. 
# There are security concerns about allowing these methods to be public. 
# If desired, these methods can be changed to internal use only by re-compiling Konsole. 
# This warning will only show once for this Konsole instance. 

