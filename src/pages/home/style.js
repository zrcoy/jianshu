import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 300px;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  float: left;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radiu: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: right;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border-radius: 3px;
  height: auto;
  border: 1px solid #969696;
  box-sizing: border-box;
  padding: 20px;
`;


export const WriterTitle = styled.div`
  font-size: 18px;
  color: #969696;
`;

export const WriterInfoSwitch = styled.div`
  text-align: left;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  float: right;
  display: inline-block;
  font-size: 18px;
  color: #969696;
`;

export const WriterItem = styled.div`
  border: 
  font-size: 13px;
  line-height: 20px;
  margin-top: 25px;
  padding-top: 5px;
  border-top: 1px dotted #969696;
  .avatar{
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 32px;
    margin-left:3px;
  }
  .avatar:hover{
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
  p{
    float:right;
    display: inline;
    font-size: 12px;
    color: #969696;
    padding-top:10px;
    margin-right:5px;
  }
  .name{
    color:red;
    font-size: 14px;
  } 
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
`