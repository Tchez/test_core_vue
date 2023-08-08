# Generated by Django 3.2 on 2023-03-08 17:29

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DadosGerais',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('enabled', models.BooleanField(default=True, verbose_name='Ativo')),
                ('deleted', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('telefone', models.CharField(max_length=11, verbose_name='Telefone')),
                ('endereco', models.CharField(max_length=100, verbose_name='Endereço')),
                ('horario_atendimento', models.CharField(max_length=100, verbose_name='Horário de atendimento')),
            ],
            options={
                'verbose_name': 'Dados Gerais',
                'verbose_name_plural': 'Dados Gerais',
                'db_table': 'configuracao_dados_gerais',
            },
        ),
        migrations.CreateModel(
            name='Gestor',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('enabled', models.BooleanField(default=True, verbose_name='Ativo')),
                ('deleted', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('nome', models.CharField(max_length=100, verbose_name='Nome')),
                ('email', models.EmailField(max_length=254, verbose_name='E-mail')),
                ('funcao', models.CharField(max_length=100, verbose_name='Função')),
                ('telefone', models.CharField(max_length=11, verbose_name='Telefone')),
                ('assinatura', models.ImageField(blank=True, null=True, upload_to='assinaturas', verbose_name='Assinatura')),
            ],
            options={
                'verbose_name': 'Gestor',
                'verbose_name_plural': 'Gestores',
                'db_table': 'configuracao_gestor',
            },
        ),
        migrations.CreateModel(
            name='ImagemLogin',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('enabled', models.BooleanField(default=True, verbose_name='Ativo')),
                ('deleted', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('imagem', models.ImageField(upload_to='imagens_login', verbose_name='Imagem de login')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo')),
                ('login_usuario', models.BooleanField(default=False, verbose_name='Login de Usuário?')),
            ],
            options={
                'verbose_name': 'Imagem de Login',
                'verbose_name_plural': 'Imagens de Login',
                'db_table': 'configuracao_imagem_login',
            },
        ),
        migrations.CreateModel(
            name='LogoSistema',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('enabled', models.BooleanField(default=True, verbose_name='Ativo')),
                ('deleted', models.BooleanField(default=False)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('imagem', models.ImageField(upload_to='logos', verbose_name='Logo do Sistema')),
                ('ativo', models.BooleanField(default=True, verbose_name='Ativo')),
            ],
            options={
                'verbose_name': 'Logo do Sistema',
                'verbose_name_plural': 'Logos do Sistema',
                'db_table': 'configuracao_logo_sistema',
            },
        ),
    ]