# Generated by Django 2.1.7 on 2019-02-26 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roadWarrior_app', '0007_auto_20190226_1717'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rv',
            name='username',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='rv',
            name='vehicleName',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
