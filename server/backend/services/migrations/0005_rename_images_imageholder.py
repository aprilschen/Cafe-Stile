# Generated by Django 4.1.6 on 2023-02-18 01:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0004_listing_contact_listing_description_listing_tags_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Images',
            new_name='ImageHolder',
        ),
    ]
