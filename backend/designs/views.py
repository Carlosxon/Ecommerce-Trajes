from rest_framework import viewsets
from .models import Design
from .serializers import DesignSerializer
import replicate
from django.http import HttpResponse


# Create your views here.



def home(request):
    return HttpResponse("¡Bienvenido al taller de trajes personalizados!")



class DesignViewSet(viewsets.ModelViewSet):
    queryset = Design.objects.all()
    serializer_class = DesignSerializer

output = replicate.run(
  "black-forest-labs/flux-schnell",
  input={"prompt": "an iguana on the beach, pointillism"}
)
 
# Save the generated image
with open('output.png', 'wb') as f:
    f.write(output[0].read())
 
print(f"Image saved as output.png")