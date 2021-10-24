"""content model

Revision ID: ba07ecccba42
Revises: e2318cba28d4
Create Date: 2021-10-23 18:47:27.360461

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ba07ecccba42'
down_revision = 'e2318cba28d4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('content',
    sa.Column('id', sa.String(length=96), nullable=False),
    sa.Column('desc', sa.String(length=116), nullable=False),
    sa.Column('categories', sa.String(length=1024), nullable=False),
    sa.Column('content', sa.String(length=50000), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_content_categories'), 'content', ['categories'], unique=False)
    op.create_index(op.f('ix_content_desc'), 'content', ['desc'], unique=False)
    op.create_index(op.f('ix_content_id'), 'content', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_content_id'), table_name='content')
    op.drop_index(op.f('ix_content_desc'), table_name='content')
    op.drop_index(op.f('ix_content_categories'), table_name='content')
    op.drop_table('content')
    # ### end Alembic commands ###