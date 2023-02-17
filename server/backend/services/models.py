from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Listing(models.Model):
    locationImages = ArrayField(models.CharField(max_length=3000, blank=True))
    location = models.CharField(max_length=120)
    days = models.CharField(max_length=120)
    price = models.CharField(max_length=120)
    isNew = models.BooleanField(default=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    def __str__(self):
        return str(self.location)