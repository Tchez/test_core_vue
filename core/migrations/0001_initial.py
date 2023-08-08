# Generated by Django 3.0.5 on 2022-10-19 14:06

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Audit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num_revision', models.IntegerField(default=0, verbose_name='Audit Revision')),
                ('tipo_revision', models.CharField(blank=True, max_length=255, null=True)),
                ('fields_change', django.contrib.postgres.fields.jsonb.JSONField(blank=True, help_text='Form_principal or Model fields that have been modified', null=True)),
                ('ip', models.CharField(max_length=50)),
                ('previous_data_change', django.contrib.postgres.fields.jsonb.JSONField(help_text='before the time of the change')),
                ('current_data', django.contrib.postgres.fields.jsonb.JSONField(help_text='data at the time of the change')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='The date and time this revision was created.', verbose_name='date created')),
                ('user_change', django.contrib.postgres.fields.jsonb.JSONField(help_text='user who changed the data', verbose_name='user')),
                ('user_permissions_change', django.contrib.postgres.fields.jsonb.JSONField(help_text='permissions at the time of change', verbose_name='user permissions')),
                ('user_groups_change', django.contrib.postgres.fields.jsonb.JSONField(help_text='groups at the time of change', verbose_name='user groups')),
                ('data_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='contenttypes.ContentType', verbose_name='Model')),
            ],
            options={
                'ordering': ['data_type', '-created'],
            },
        ),
    ]