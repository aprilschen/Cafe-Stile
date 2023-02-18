from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
class Images(models.Model):
    url = models.CharField(max_length=2000)

    def __str__(self):
        return str(self.url)

class Listing(models.Model):
    locationImageList = models.ManyToManyField(Images, blank=True)
    title = models.CharField(max_length=120, default="")
    location = models.CharField(max_length=120, default="")
    description = models.TextField(max_length=2000, blank=True, default="")
    days = models.CharField(max_length=200, default="Contact for details")
    price = models.CharField(max_length=200, default="Contact for details")
    isNew = models.BooleanField(default=True)
    contact = models.CharField(max_length=1000, default="")
    tags = models.CharField(max_length=2000, blank=True)
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=5)

    def __str__(self):
        return str(self.location)