from typing import Any, List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app import schemas
from app.api import deps
from app.models import Content, User

router = APIRouter()


@router.post("/", response_model=schemas.ContentBase)
async def create_content(
    content_create: schemas.ContentCreate,
    session: AsyncSession = Depends(deps.get_session),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Create content.
    """
    result = await session.execute(
        select(Content).where(Content.id == content_create.id)
    )
    content: Optional[Content] = result.scalars().first()

    if content is None:
        new_content = Content(**content_create.dict())
        session.add(new_content)
        await session.commit()
        await session.refresh(new_content)
        return new_content
    else:
        raise HTTPException(404, "Content with this title already exists")


@router.get("/", response_model=List[schemas.ContentBase])
async def get_contents(
    offset: int = 0,
    limit: int = 50,
    session: AsyncSession = Depends(deps.get_session),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Get all contents.
    """
    result = await session.execute(select(Content).limit(limit).offset(offset))
    contents: List[Content] = result.scalars().all()
    return contents


@router.delete("/{content_id}", response_model=None, status_code=204)
async def delete_content(
    content_id: str,
    session: AsyncSession = Depends(deps.get_session),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete content.
    """

    result = await session.execute(select(Content).where(Content.id == content_id))
    content: Optional[Content] = result.scalars().first()
    if content is None:
        raise HTTPException(404, "Content with this title does not exist")
    else:
        await session.execute(delete(Content).where(Content.id == content_id))
