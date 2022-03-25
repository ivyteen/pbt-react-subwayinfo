import { ListGroup, ListGroupItem, Table } from 'reactstrap'


function InfoOutput(props) {

    const info = props.info
    console.log(info)

    const StationInfo = () => {
        
        let output = null
        
        if(info.length !==0){
            let name = info[0].statnNm
            let time = info[0].recptnDt

            let list = info[0].subwayList.split(",")
            
            list = list.map((el) => el.slice(2) )
            console.log(list)
            

            output = (
                <tr>
                    <th scope="row" >{name}</th>
                    <th>{list.toString()}호선</th>
                    <th>{time}</th>
                </tr>              
            )
        }

        return output
    }

    const arrvInfoList = (info.length !==0) ? info.map((el, index) => {
        return (
            <ListGroupItem key={index}>
                <p>[{el.updnLine}] {el.trainLineNm}</p>
                <p>{el.arvlMsg2}</p>
            </ListGroupItem>
        )

    }) : null

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>역명</th>
                        <th>노선</th>
                        <th>데이터 시간</th>
                    </tr>
                </thead>
                <tbody>
                    {StationInfo()} 
                </tbody>
            </Table>
            <ListGroup>
                {arrvInfoList}
            </ListGroup>
        </div>
    )

}



export default InfoOutput