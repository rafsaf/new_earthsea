from typing import Any, List, Optional

from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app import schemas
from app.api import deps
from app.models import Content, User

router = APIRouter()


@router.post("/", response_model=schemas.ContentBase, status_code=201)
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


@router.get("/", response_model=List[schemas.ContentShort])
async def get_short_contents(
    response: Response,
    ilike: str = "",
    offset: int = 0,
    limit: int = 25,
    session: AsyncSession = Depends(deps.get_session),
) -> Any:
    """
    Get all contents.

    For given `ilike` param query db looking for Content like this

    Retrun `total-count` header with number of all objects
    """
    stmt_count = select(func.count(Content.id)).where(
        Content.id.ilike(f"%{ilike}%")  # type: ignore
        | Content.desc.ilike(f"%{ilike}%")  # type: ignore
        | Content.categories.ilike(f"%{ilike}%")  # type: ignore
    )
    count_result = await session.execute(stmt_count)
    count: int = count_result.scalars().one()
    response.headers.append("total-count", str(count))

    stmt = (
        select(Content)
        .where(
            Content.id.ilike(f"%{ilike}%")  # type: ignore
            | Content.desc.ilike(f"%{ilike}%")  # type: ignore
            | Content.categories.ilike(f"%{ilike}%")  # type: ignore
        )
        .limit(limit)
        .offset(offset)
    )
    result = await session.execute(stmt)

    contents = result.scalars().all()
    return contents


@router.get("/{content_id}", response_model=schemas.ContentBase)
async def get_single_content(
    content_id: str,
    session: AsyncSession = Depends(deps.get_session),
) -> Any:
    """
    Get content with all fields.
    """
    result = await session.execute(select(Content).where(Content.id == content_id))
    content: Optional[Content] = result.scalars().first()
    if content is None:
        raise HTTPException(404, "Content with this title does not exist")
    else:
        return content


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
        await session.delete(content)


@router.put("/{content_id}", response_model=schemas.ContentBase, status_code=200)
async def update_content(
    content_id: str,
    update_content: schemas.ContentUpdate,
    session: AsyncSession = Depends(deps.get_session),
    current_user: User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Update content.
    """

    result = await session.execute(select(Content).where(Content.id == content_id))
    content: Optional[Content] = result.scalars().first()
    if content is None:
        raise HTTPException(404, "Content with this title does not exist")
    else:
        if update_content.content:
            content.content = update_content.content
        if update_content.categories:
            content.categories = update_content.categories
        if update_content.desc:
            content.desc = update_content.desc
        session.add(content)
        await session.commit()
        await session.refresh(content)
        return content
