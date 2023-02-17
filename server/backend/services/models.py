from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Images(models.Model):
    url = models.CharField(max_length=2000)

    def __str__(self):
        return str(self.url)

class Listing(models.Model):
    locationImageList = models.ManyToManyField(Images)
    location = models.CharField(max_length=120)
    days = models.CharField(max_length=120)
    price = models.CharField(max_length=120)
    isNew = models.BooleanField(default=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    def __str__(self):
        return str(self.location)