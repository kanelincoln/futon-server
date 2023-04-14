const createTestSpace = async (prisma) => {
  const borough = await prisma.borough.create({
    data: {
      name: 'Southwark'
    }
  });

  const space = await prisma.space.create({
    data: {
      name: 'Co.',
      boroughId: borough.id,
      affordability: 1,
      type: 'Café',
      wiFi: 1,
      loudness: 1,
      power: 1,
      size: 1,
      space: 1,
      busyness: 1,
      coffee: 1,
      hotspot: 1,
      rules: 'These are the rules.',
      googleMaps: 'https://google.com/maps'
    }
  });

  const openingHours = await prisma.openingHours.create({
    data: {
      spaceId: space.id,
      day: 'Monday',
      openTime: '08:00',
      closeTime: '17:00'
    }
  });

  return { borough, space, openingHours };
}

module.exports = {
  createTestSpace,
};