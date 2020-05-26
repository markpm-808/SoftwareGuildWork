
function findMax(array)
{
	var max = array[0];
	for(var pos = 1; pos < array.length; pos++)
	{
		if(array[pos] > max)
		{
			max = array[pos];
		}

	}
	return max;
}