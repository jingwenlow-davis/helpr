from django.db import models
# from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
# from django.conf import settings
# from django.contrib.contenttypes.fields import GenericForeignKey
# from django.contrib.contenttypes.models import ContentType
# from rest_framework.authtoken.models import Token

# This code is triggered whenever a new user has been created and saved to the database
# @receiver(post_save, sender=settings.AUTH_USER_MODEL)
# def create_auth_token(sender, instance=None, created=False, **kwargs):
# 	if created:
# 		Token.objects.create(user=instance)


class User(AbstractUser):
    '''
    User info and Profile
    '''
    # profile_picture = models.ImageField(upload_to='profile')
    # date_joined = models.DateTimeField(auto_now=True)
    # location = models.IntegerField(null=True, blank=True)
    # bio = models.TextField(max_length=500, blank=True)
    age = models.PositiveSmallIntegerField(null=True, blank=True)

    GENDER_CHOICES = (
    	('M', 'Male'),
    	('F', 'Female'),
    	('O', 'Other'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)

    def __str__(self):
    	return self.username
