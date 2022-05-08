import React from 'react'
import Homebanner from '../../components/Home/Homebanner/Homebanner'
import Homeblog from '../../components/Home/Homeblog/Homeblog'
import HomeCategory from '../../components/Home/HomeCategory/HomeCategory'
import Homecomuni from '../../components/Home/HomeComuni/Homecomuni'
import HomeCourse from '../../components/Home/HomeCourse/HomeCourse'
import HomeHeader from '../../components/Home/HomeHeader/HomeHeader'
import Hometeacher from '../../components/Home/Hometeacher/Hometeacher'
import Homeupcoming from '../../components/Home/HomeUpcoming/Homeupcoming'

export default function Home() {
  return (
    <div>
        <HomeHeader />
        <HomeCategory />
        <Homecomuni />
        <HomeCourse />
        <Homebanner />
        <Homeupcoming />
        <Hometeacher />
        <Homeblog />
    </div>
  )
}
