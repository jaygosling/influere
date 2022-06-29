"""empty message

Revision ID: 5308d008caae
Revises: 
Create Date: 2022-06-27 16:35:59.223111

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5308d008caae'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('empresas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=80), nullable=False),
    sa.Column('razon_social', sa.String(length=80), nullable=False),
    sa.Column('sector', sa.String(length=80), nullable=False),
    sa.Column('autonomia', sa.String(length=80), nullable=False),
    sa.Column('ciudad', sa.String(length=80), nullable=False),
    sa.Column('bio', sa.String(length=360), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('influencers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=80), nullable=False),
    sa.Column('ig_user', sa.String(length=80), nullable=False),
    sa.Column('categoria', sa.String(length=80), nullable=False),
    sa.Column('autonomia', sa.String(length=80), nullable=False),
    sa.Column('ciudad', sa.String(length=80), nullable=False),
    sa.Column('bio', sa.String(length=360), nullable=False),
    sa.Column('post1', sa.String(length=120), nullable=True),
    sa.Column('post2', sa.String(length=120), nullable=True),
    sa.Column('post3', sa.String(length=120), nullable=True),
    sa.Column('post4', sa.String(length=120), nullable=True),
    sa.Column('post5', sa.String(length=120), nullable=True),
    sa.Column('post6', sa.String(length=120), nullable=True),
    sa.Column('precio_post', sa.Integer(), nullable=True),
    sa.Column('precio_reel', sa.Integer(), nullable=True),
    sa.Column('precio_story', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('ig_user')
    )
    op.create_table('favoritos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('empresa_id', sa.Integer(), nullable=True),
    sa.Column('influencer_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['empresa_id'], ['empresas.id'], ),
    sa.ForeignKeyConstraint(['influencer_id'], ['influencers.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favoritos')
    op.drop_table('influencers')
    op.drop_table('empresas')
    # ### end Alembic commands ###
