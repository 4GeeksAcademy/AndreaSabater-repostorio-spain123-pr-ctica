import os
from flask_admin import Admin
from .models import db, Users
from flask_admin.theme import Bootstrap4Theme


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config["FLASK_ADMIN_SWATCH"] = "darkly"
    admin = Admin(app, name='4Geeks Admin', theme=Bootstrap4Theme(swatch='cerulean'))
    #Add your models here, for example this is how we add a the User model to the main 
    admin.add_view(ModelView(Users, db.session))
      
