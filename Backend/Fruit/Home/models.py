from django.db import models

# Create your models here.
class Fruit(models.Model):
    image = models.ImageField(upload_to='images/',blank=True,null=True)
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    Effect = models.CharField(max_length=100)