import graphene
import graphql_jwt
from graphene_django.types import DjangoObjectType, ObjectType
from .models import User
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator

# Create a GraphQL type for the user model
class UserType(DjangoObjectType):
    class Meta:
        model = User
    model = User

# Create a Query type
class Query(ObjectType):
    user = graphene.Field(UserType, id=graphene.Int())
    users = graphene.List(UserType)

    def resolve_user(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return User.objects.get(pk=id)

        return None

    def resolve_users(self, info, **kwargs):
        return User.objects.all()

# Create Input Object Types
class UserInput(graphene.InputObjectType):
    # id = graphene.ID()
    first_name = graphene.String()
    last_name = graphene.String()
    username = graphene.String()
    email = graphene.String()
    password = graphene.String()
    age = graphene.Int()
    gender = graphene.String()

# Create mutations for users
# @method_decorator(csrf_protect, name='dispatch')
class CreateUser(graphene.Mutation):
    class Arguments:
        input = UserInput(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(UserType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        user_instance = User(
            first_name=input.first_name,
            last_name=input.last_name,
            username=input.username,
            email=input.email,
            password=input.password,
            age=input.age,
            gender=input.gender
        )
        user_instance.save()
        return CreateUser(ok=ok, user=user_instance)

class UpdateUser(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = UserInput(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(UserType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        user_instance = User.objects.get(pk=id)
        if user_instance:
            ok = True
            user_instance.display_name = input.display_name
            user_instance.save()
            return UpdateUser(ok=ok, user=user_instance)
        return UpdateUser(ok=ok, user=None)

class Mutation(graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()

    create_user = CreateUser.Field()
    update_user = UpdateUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
