from app.crud.base import CRUDBase
from app.models import Content
from app.schemas.content import ContentBase, ContentUpdate


class CRUDContent(CRUDBase[Content, ContentBase, ContentUpdate]):
    pass


content = CRUDContent(Content)
