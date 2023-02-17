# Generated by Django 4.1.6 on 2023-02-17 20:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=2000)),
            ],
        ),
        migrations.RemoveField(
            model_name='listing',
            name='locationImages',
        ),
        migrations.AddField(
            model_name='listing',
            name='locationImageList',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='services.images'),
        ),
    ]
