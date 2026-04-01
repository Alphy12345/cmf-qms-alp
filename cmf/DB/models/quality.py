from sqlalchemy import (
    Column,
    Integer,
    String,
    Float,
    Boolean,
    TIMESTAMP,
    ForeignKey,
    func,
    UniqueConstraint,
    BigInteger,
    Text
)
from sqlalchemy.orm import relationship
from ..database import Base

class MasterBoc(Base):
    """
    Master BOC table for storing bill of characteristics data
    """
    __tablename__ = "master_boc"
    __table_args__ = {'schema': 'quality'}

    id = Column(Integer, primary_key=True, index=True)
    part_id = Column(String, ForeignKey("oms.parts.part_number"), nullable=False)  # Part number string
    sales_order_id = Column(Integer, ForeignKey("oms.orders.id"), nullable=False)
    nominal = Column(String, nullable=False)
    uppertol = Column(Float, nullable=False)
    lowertol = Column(Float, nullable=False)
    zone = Column(String, nullable=False)
    dimension_type = Column(String, nullable=False)
    measured_instrument = Column(String, nullable=False)
    op_no = Column(Integer, nullable=False)
    bbox = Column(Text, nullable=False)  # Storing as JSON string or specific format
    ipid = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("accesscontrol.access_users.id"), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)

    # Relationships
    part = relationship("DB.models.oms.Part")
    order = relationship("DB.models.oms.Order")
    user = relationship("DB.models.access_control.AccessUser")


class StageInspection(Base):
    """
    Stage Inspection table for storing inspection measurements
    """
    __tablename__ = "stage_inspection"
    __table_args__ = {'schema': 'quality'}

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("accesscontrol.access_users.id"), nullable=False)
    part_id = Column(Integer, ForeignKey("oms.parts.id"), nullable=False)
    sale_order_id = Column(Integer, ForeignKey("oms.orders.id"), nullable=False)
    nominal_value = Column(String, nullable=False)
    uppertol = Column(Float, nullable=False)
    lowertol = Column(Float, nullable=False)
    zone = Column(String, nullable=False)
    dimension_type = Column(String, nullable=False)
    measured_1 = Column(String, nullable=False)
    measured_2 = Column(String, nullable=False)
    measured_3 = Column(String, nullable=False)
    measured_mean = Column(String, nullable=False)
    measured_instrument = Column(String, nullable=False)
    used_inst = Column(String, nullable=False)
    op_no = Column(Integer, nullable=False)
    quantity_no = Column(Integer, nullable=True)
    bbox = Column(Text, nullable=True)  # Storing as JSON string
    is_done = Column(Boolean, nullable=False, default=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)

    # Relationships
    user = relationship("DB.models.access_control.AccessUser")
    part = relationship("DB.models.oms.Part")
    order = relationship("DB.models.oms.Order")


class FTP(Base):
    """
    FTP table for tracking IPID completion status
    """
    __tablename__ = "ftp_status"
    __table_args__ = (
        UniqueConstraint('order_id', 'ipid', name='uix_order_ipid'),
        {'schema': 'quality'}
    )

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(BigInteger, ForeignKey("oms.orders.id"), nullable=False)
    ipid = Column(String(255), nullable=False)
    is_completed = Column(Boolean, nullable=False, default=False)
    status = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), nullable=False)
    updated_at = Column(TIMESTAMP(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    # Relationships
    order = relationship("DB.models.oms.Order")
