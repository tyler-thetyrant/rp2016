from __future__ import unicode_literals

from django.db import models

class Attendee(models.Model):
    first_name = models.CharField(max_length=32)
    last_name = models.CharField(max_length=32)
    grad_date = models.DateTimeField('Graduation Date')
    major = models.CharField(max_length=32)
    school = models.CharField(max_length=50)
    resume_url = models.CharField(max_length=50)