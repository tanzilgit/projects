import device from "@utils/mediaUtils";
import Image from "next/image";
import styled from "styled-components"

const MainContainer = styled.div`
  .gallery-row{
    display: flex;
    padding: 30px 30px 0;
    ${device.mobileL}{
      padding: 20px 20px 0;
    }
  }
  .gallery-last{
    padding: 30px 30px;
    ${device.mobileL}{
      padding: 20px 20px;
    }
  }
  .gallery-col{
    width: 100%;
  }
  .gallery-col + .gallery-col{
    margin-left: 20px;
  }
  .gal-item + .gal-item{
    margin-top: 20px;
  }
`;

const defaultItems = [
  {
    img: "/assets/outdoor-furniture/pre-collection/mobile/1.jpg",
    width: "168",
    height: "204"
  },
  {
    img: "/assets/outdoor-furniture/pre-collection/mobile/2.jpg",
    width: "168",
    height: "361"
  },
  {
    img: "/assets/outdoor-furniture/pre-collection/mobile/3.jpg",
    width: "128",
    height: "246"
  },
  {
    img: "/assets/outdoor-furniture/pre-collection/mobile/4.jpg",
    width: "128",
    height: "186"
  },
  {
    img: "/assets/outdoor-furniture/pre-collection/mobile/5.jpg",
    width: "355",
    height: "188"
  }
];

function GalleryMobile({items}) {
  return (
    <MainContainer>
      <div className="gallery-row">
        <div className="gallery-col">
          <div className="gal-item">
            <Image src={items[0].img} width={items[0].width} height={items[0].height} layout="responsive" />
          </div>
          <div className="gal-item">
            <Image src={items[1].img} width={items[1].width} height={items[1].height} layout="responsive" />
          </div>
        </div>
        <div className="gallery-col">
          <div className="gal-item">
            <Image src={items[2].img} width={items[2].width} height={items[2].height} layout="responsive" />
          </div>
          <div className="gal-item">
          <Image src={items[3].img} width={items[3].width} height={items[3].height} layout="responsive" />
          </div>
        </div>
      </div>
      <div className="gallery-last">
        <Image src={items[4].img} width={items[4].width} height={items[4].height} layout="responsive" />
      </div>
    </MainContainer>
  )
}

GalleryMobile.defaultProps = {
  items: defaultItems
}

export default GalleryMobile
