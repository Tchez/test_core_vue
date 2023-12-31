from drf_jsonmask.views import OptimizedQuerySetMixin
from rest_framework import filters
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework_simplejwt.authentication import JWTAuthentication

from aluno.models import Aluno, Curso

from .serializers import (
    AlunoGETSerializer,
    AlunoListSerializer,
    AlunoSerializer,
    CursoGETSerializer,
    CursoSerializer,
)


class CursoViewAPI(ModelViewSet):
    """Classe para gerenciar as requisições da API para POST, PUT, PATCH e DELETE"""

    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Curso.objects.select_related().all()
    serializer_class = CursoSerializer


class CursoCustomViewAPI(OptimizedQuerySetMixin, ReadOnlyModelViewSet):
    """Classe para gerenciar as requisições da API para o GET

    A lista filterset_fields deve ser configurada com os campos do models que poderão ser utilizados para realizar
    filtros no models como por exemplo nome_do_campo=valor_a_ser_filtrado

    A lista search_fields deve ser configurada com os campos do models que poderão ser utilizados para realizar
    buscas no models como por exemplo search=valor_a_ser_pesquisado
    """

    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [
        IsAuthenticated,
    ]
    queryset = Curso.objects.select_related().all()
    serializer_class = CursoGETSerializer
    filter_backend = [filters.SearchFilter]
    filterset_fields = []
    search_fields = []


class AlunoViewAPI(ModelViewSet):
    """Classe para gerenciar as requisições da API para POST, PUT, PATCH e DELETE"""

    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Aluno.objects.select_related().all()
    serializer_class = AlunoSerializer


class AlunoListViewAPI(ModelViewSet):
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Aluno.objects_all.select_related('curso').all()
    serializer_class = AlunoListSerializer


class AlunoCustomViewAPI(OptimizedQuerySetMixin, ReadOnlyModelViewSet):
    """Classe para gerenciar as requisições da API para o GET

    A lista filterset_fields deve ser configurada com os campos do models que poderão ser utilizados para realizar
    filtros no models como por exemplo nome_do_campo=valor_a_ser_filtrado

    A lista search_fields deve ser configurada com os campos do models que poderão ser utilizados para realizar
    buscas no models como por exemplo search=valor_a_ser_pesquisado
    """

    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [
        IsAuthenticated,
    ]
    queryset = Aluno.objects.select_related().all()
    serializer_class = AlunoGETSerializer
    filter_backend = [filters.SearchFilter]
    filterset_fields = []
    search_fields = []
