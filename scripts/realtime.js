(() => {
    dayjs.extend(window.dayjs_plugin_duration)
    const el = document.getElementById('realtime_duration')
    // 改成自己的时间
    const date = dayjs('2024-04-29')
  
    setInterval(() => {
      const dur = dayjs.duration(dayjs().diff(date))
      const days = String(Math.floor(dur.asDays()))
      el.innerHTML = '小破站已运行 ' + days + dur.format('天 HH时 mm分 ss秒')
    }, 1000)
  })()