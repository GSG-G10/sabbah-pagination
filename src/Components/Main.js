import { Pagination, Spin, Image, message } from "antd"

const Main = ({states}) => {
    const {data, setPage, isLoaded} = states

    const onPagChange = (val) => {
        setPage(val)
    }
    // handle error
    const ErrorMsg = () => message.error('Something went wrong')

    return<main>
     <nav>
        <Pagination defaultCurrent={1} total={500} onChange={onPagChange} />
    </nav>
    <section className='photos-section'>
      {isLoaded ? data ? data.map((ele, i) => {
          return <Image
            key={i}
             style={{
              padding: '5px'
            }}
              width={230}
             src={ele}
              />
      }) : <ErrorMsg /> : <Spin />}
    </section>
    
    </main>
}
export default Main;
