from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String(254))
    email = Column(String(254), unique=True, index=True, nullable=False)
    hashed_password = Column(String(128), nullable=False)


class Content(Base):
    __tablename__ = "content"

    id = Column(String(96), primary_key=True, index=True)
    categories = Column(String(1024), index=True, nullable=False)
    content = Column(String(50000), nullable=False)
