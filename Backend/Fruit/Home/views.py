from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Fruit
from .serializers import FruitSerializer

@api_view(['GET'])
def home(request):
    data = Fruit.objects.all()
    serializer = FruitSerializer(data, many=True)
    return Response(serializer.data)
