# Generated by Django 2.1.7 on 2019-02-21 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('roadWarrior_app', '0002_song'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='RV',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('vehicleName', models.CharField(max_length=100)),
                ('make', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('year', models.CharField(max_length=12)),
                ('rvClass', models.CharField(max_length=20)),
                ('origin', models.CharField(max_length=100)),
                ('image', models.TextField()),
            ],
        ),
        migrations.RemoveField(
            model_name='song',
            name='artist',
        ),
        migrations.DeleteModel(
            name='Artist',
        ),
        migrations.DeleteModel(
            name='Song',
        ),
        migrations.AddField(
            model_name='post',
            name='rv',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='roadWarrior_app.RV'),
        ),
    ]
