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

    GENDER_CHOICES = (
    	('M', 'Male'),
    	('F', 'Female'),
    	('O', 'Other'),
    )
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES, null=True, blank=True)

    # lister fields
    helpr = models.BooleanField(default=False) # if this use is listing anything or just a user
    birthday = models.DateField(null=True, blank=True)

    def __str__(self):
    	return self.username

class Category(models.Model):
    '''
    All possible categories
    '''

    CATEGORY_CHOICES = (
    	('photographer', 'photographer'),
    	('plumber', 'plumber'),
    	('landscaper', 'landscaper'),
    	('personal_trainer', 'personal trainer'),
    	('tutor', 'tutor'),
    	('carpenter', 'carpenter'),
    	('electrician', 'electrician'),
    	('pool_service', 'pool service'),
    	('gardener', 'gardnerer'),
    	('babysitting', 'babysitting'),
    )
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, null=True, blank=True)

    def __str__(self):
    	return self.category

class Listing(models.Model):
    '''
    Listing a user posts
    '''
    title = models.CharField(max_length=250)
    user = models.ManyToManyField(User)
    # profile_picture = models.ImageField(upload_to='profile')
    # location = models.idk()
    # images
    blurb = models.TextField(max_length=500, null=True, blank=True)
    # phone_number = models.PositiveIntegerField(null=True, blank=True)
    # email = models.CharField(max_length=150)
    website = models.CharField(max_length=150, null=True, blank=True)
    category = models.ManyToManyField(Category)
    # ratings = models.

    def __str__(self):
    	return self.title
