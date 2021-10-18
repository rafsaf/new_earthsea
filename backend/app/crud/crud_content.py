from app.crud.base import CRUDBase
from app.models import Content
from app.schemas import ContentCreate, ContentUpdate


class CRUDContent(CRUDBase[Content, ContentCreate, ContentUpdate]):
    pass


content = CRUDContent(Content)
