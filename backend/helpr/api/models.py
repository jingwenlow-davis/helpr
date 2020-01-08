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
    User info and profile
    '''
    # profile_picture = models.ImageField(upload_to='profile')
    # location = models.idk(null=True, blank=True)
    # blurb = models.TextField(max_length=250, blank=True)
    age = models.PositiveSmallIntegerField(null=True, blank=True)
    # birthday = models.DateField()

    GENDER_CHOICES = (
    	('M', 'Male'),
    	('F', 'Female'),
    	('O', 'Other'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)

    def __str__(self):
    	return self.username

# class Service(models.Model):
#     '''
#     Service a user provides
#     '''
#     title = models.CharField(max_length=250)
#     # profile_picture = models.ImageField(upload_to='profile')
#     phone_number = models.PositiveIntegerField()
#     email = models.CharField(max_length=150)
#     website = models.CharField(max_length=150)
#     location = models.idk()
#     category = models.ManyToManyField(Category)
#
#     def __str__(self):
#     	return self.title
#
# class Category(models.Model):
#     '''
#     All possible categories
#     '''
#     category = models.CharField(max_length=1, choices=CATEGORY_CHOICES, null=True, blank=True)
#
#     def __str__(self):
#     	return self.category
