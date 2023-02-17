# Generated by Django 4.1.6 on 2023-02-17 22:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_images_remove_listing_locationimages_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='locationImageList',
        ),
        migrations.AddField(
            model_name='listing',
            name='locationImageList',
            field=models.ManyToManyField(to='services.images'),
        ),
    ]
