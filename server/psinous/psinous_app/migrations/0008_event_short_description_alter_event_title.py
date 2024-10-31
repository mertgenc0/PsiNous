# Generated by Django 5.1.1 on 2024-10-31 09:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("psinous_app", "0007_alter_link_options_alter_sublink_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="event",
            name="short_description",
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="event",
            name="title",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]